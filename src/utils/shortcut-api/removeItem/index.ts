import { Confirm, Notify } from "notiflix";

const handleRemove = (id: any, deleteApi: (id: string) => Promise<any>, setData: any, data: any) => {
    Confirm.show(
        "Konfirmasi Penghapusan",
        "Apakah Kamu Yakin ?",
        "Iya",
        "Tidak",
        () => {
            deleteApi(id)
                .then((res) => {
                    console.log(res)
                    setData(data.filter((item: any) => item._id !== id));
                    Notify.success(res.data.message, {
                        position: "right-bottom",
                    });
                })
                .catch((err) => {
                    Notify.failure(err.response.data.message, {
                        position: "right-bottom",
                    });
                });
        },
        () => {
            Notify.info("Canceled", {
                position: "right-bottom",
            });
        },
        {
            titleColor: "#0277bd",
            okButtonBackground: "#0277bd",
        }
    );
};

export default handleRemove;