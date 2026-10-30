
const HamroSewa = require("./model");

class HamroSewaController {

    create = async (req, res) => {
        try {
            const {
                name,
                slug,
                category,
                description,
                icon=null,
                thumbnail=null,
                requiredDocuments,
                eligibility,
                applicationProcess,
                fee,
                processingTime,
                office,
                location,
                applicationUrl,
                isOnline,
                isActive
            } = req.body;

            const service = new HamroSewa({
                name,
                slug,
                category,
                description,
                icon,
                thumbnail,
                requiredDocuments,
                eligibility,
                applicationProcess,
                fee,
                processingTime,
                office,
                location,
                applicationUrl,
                isOnline,
                isActive,
                createdBy: req.user?._id
            });

            await service.save();

            return res.status(201).json({
                success: true,
                message: "Service created successfully",
                data: service
            });

        } catch (exception) {
            throw exception;
        }
    };


    // GET ALL SERVICES
    list = async (req, res) => {
        try {
            const {
                search,
                category,
                status,
                page = 1,
                limit = 10
            } = req.query;

            const filter = {};

            if (search) {
                filter.name = {
                    $regex: search,
                    $options: "i"
                };
            }

            if (category) {
                filter.category = category;
            }

            if (status !== undefined) {
                filter.isActive = status === "true";
            }

            const skip = (Number(page) - 1) * Number(limit);

            const [services, total] = await Promise.all([
                HamroSewa.find(filter)
                    .populate("category")
                    .sort({ createdAt: -1 })
                    .skip(skip)
                    .limit(Number(limit)),

                HamroSewa.countDocuments(filter)
            ]);

            return res.status(200).json({
                success: true,
                message: "Services fetched successfully",
                data: services,
                pagination: {
                    total,
                    page: Number(page),
                    limit: Number(limit),
                    totalPages: Math.ceil(total / Number(limit))
                }
            });

        } catch (exception) {
            throw exception;
        }
    };


    // GET SINGLE SERVICE
    detail = async (req, res) => {
        try {
            const { id } = req.params;

            const service = await HamroSewa.findById(id);

            if (!service) {
                return res.status(404).json({
                    success: false,
                    message: "Service not found"
                });
            }

            return res.status(200).json({
                success: true,
                message: "Service details fetched successfully",
                data: service
            });

        } catch (exception) {
            throw exception;
        }
    };


    // UPDATE SERVICE
    update = async (req, res) => {
        try {
            const { id } = req.params;

            const allowedFields = [
                "name",
                "slug",
                "category",
                "description",
                "icon",
                "thumbnail",
                "requiredDocuments",
                "eligibility",
                "applicationProcess",
                "fee",
                "processingTime",
                "office",
                "location",
                "applicationUrl",
                "isOnline",
                "isActive"
            ];

            const updateData = {};

            allowedFields.forEach((field) => {
                if (req.body[field] !== undefined) {
                    updateData[field] = req.body[field];
                }
            });

            if (Object.keys(updateData).length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "No valid fields provided for update"
                });
            }

            const service = await HamroSewa.findByIdAndUpdate(
                id,
                { $set: updateData },
                {
                    new: true,
                    runValidators: true
                }
            ).populate("category");

            if (!service) {
                return res.status(404).json({
                    success: false,
                    message: "Service not found"
                });
            }

            return res.status(200).json({
                success: true,
                message: "Service updated successfully",
                data: service
            });

        } catch (exception) {
            throw exception;
        }
    };


    // DELETE SERVICE
    delete = async (req, res) => {
        try {
            const { id } = req.params;

            const service = await HamroSewa.findByIdAndDelete(id);

            if (!service) {
                return res.status(404).json({
                    success: false,
                    message: "Service not found"
                });
            }

            return res.status(200).json({
                success: true,
                message: "Service deleted successfully"
            });

        } catch (exception) {
            throw exception;
        }
    };

    getAllServices = async (req, res) => {
        try {
            const services = await HamroSewa.find();
            return res.status(200).json({
                success: true,
                message: "All services fetched successfully",
                data: services
            });
        } catch (exception) {
            throw exception;
        }
    };


    // TOGGLE SERVICE STATUS
    toggleStatus = async (req, res) => {
        try {
            const { id } = req.params;

            const service = await HamroSewa.findById(id);

            if (!service) {
                return res.status(404).json({
                    success: false,
                    message: "Service not found"
                });
            }

            service.isActive = !service.isActive;

            await service.save();

            return res.status(200).json({
                success: true,
                message: `Service ${service.isActive ? "activated" : "deactivated"} successfully`,
                data: service
            });

        } catch (exception) {
            throw exception;
        }
    };

}
const HamroSewaCltr = new HamroSewaController();
module.exports = HamroSewaCltr;
