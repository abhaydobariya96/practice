const { mobileService } = require("../services");

const createMobile = async (req, res) => {
    try {
        const reqBody = req.body;
        const mobile = await mobileService.createMobile(reqBody);

        if (!mobile) {
            throw new Error("somthing went wrong. please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: "mobile create successfuklly!",
            data: { mobile }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};



/** list mobile */
const listMobile = async (req, res) => {
    try {
        const reqBody = req.body;

        const mobile = await mobileService.listMobile(reqBody);
        if (!mobile) {
            throw new Error("Something went wrong, please try again or later!");
        }

        res.status(200).json({
            success: true,
            message: "Mobile list successfully!",
            data: { mobile },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteMobile = async (req, res) => {
    try {
        const id = req.params.Id
        const mobile = await mobileService.listMobile();
        if (!mobile) {
            throw new Error("somthig went wrong, please try again or later !")
        }
        await mobileService.deleteMobile(id);
        res.status(200).json({
            success: true,
            message: "mobile delete successfully",
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });

    }
}

const updateMobile = async (req, res) => {
    try {
        const id = req.params.mobileId
        const mobile =  await mobileService.getMobileById(id)
        if (!mobile){
            throw new Error ("mobile not found!");
        }
        await mobileService.updateDetails(id,req.body);
        res.status(200).json({
            success : true,
            message : ("mobile details update successfully!")
        })

    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        });
    }
}
module.exports = {
    createMobile,
    listMobile,
    deleteMobile,
    updateMobile
}