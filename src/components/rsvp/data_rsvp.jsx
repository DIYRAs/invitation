import { useEffect, useState } from 'react'

export default function Data_rsvp() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('data')) || [];
        setData(stored);
    }, []);

    return (
        <>
            <button
                className="btn mt-6 z-50 bg-slate-900 text-white"
                onClick={() => document.getElementById('my_modal_2').showModal()}
            >SEE RSVP</button>

            <dialog id="my_modal_2" className="modal bg-slate-900 text-white">
                <div className="modal-box max-h-[80vh] overflow-y-auto">
                    <h3 className="font-bold text-lg mb-4">Daftar RSVP</h3>

                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <div key={index} className="mb-2 p-2 rounded bg-slate-800">
                                <p><strong>Nama:</strong> {item.name}</p>
                                <p><strong>Jumlah:</strong> {item.count}</p>
                                <p><strong>Konfirmasi:</strong> {item.confirm}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-300">Belum ada data RSVP</p>
                    )}

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
