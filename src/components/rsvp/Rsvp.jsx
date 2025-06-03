import React from 'react'

const Rsvp = () => {
    return (
        <section className='h-screen bg-fixed pt-12'
        style={{backgroundImage: 'url(assets/image/bg-brown-flower-1.jpg)'}}>
            <fieldset className="fieldset bg-white/10 backdrop-blur-[3px] text-black space-y-8 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-black text-2xl font-bold">RSVP</legend>

                <div>
                    <label className="label text-sm font-mono text-black">Nama</label>
                    <input type="text" className="input text-white" placeholder="Nama" />
                </div>

                <div>
                    <label className="label text-sm font-mono text-black">Jumlah Tamu</label>
                    <input type="number" className="input text-white" placeholder="Jumlah Tamu" />
                </div>

                <div>
                    <label className="label text-sm font-mono text-black">Kehadiran</label>
                    <select defaultValue="Pick a language" className="select text-white">
                        <option disabled={true}>Kehadiran</option>
                        <option>Hadir</option>
                        <option>Tidak Hadir</option>
                    </select>
                </div>

                <button className="btn btn-outline mt-4"
                style={{boxShadow: 'inset 0 0 5px black'}}>Konfirmasi</button>
            </fieldset>
        </section>
    )
}

export default Rsvp