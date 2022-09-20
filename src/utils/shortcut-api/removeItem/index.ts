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
                    setData(data.filter((item: any) => item._id !== id));
                    Notify.success(res.data.message, {
                        position: "right-bottom",
                    });
                })
                .catch((err) => {
                    Notify.failure(err.data.message, {
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
            titleColor: "#00695C",
            okButtonBackground: "#00695C",
        }
    );
};

export default handleRemove;