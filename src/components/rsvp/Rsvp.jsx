import { useRef, useState } from 'react'
import Decoration from './decoration'
import Data_rsvp from './data_rsvp'

const Rsvp = () => {
    const trigger = useRef(null)
    const [input, setInput] = useState({
        name: '',
        count: '',
        confirm: ''
    })
    const { name, count, confirm } = input

    const handleInput = (e) => {
        const { name, value } = e.target
        setInput(prev => ({ ...prev, [name]: value }))
        console.log(input)
    }

    const handleSubmit = async () => {

        try {
            const res = await fetch('http://localhost/PHP/invitation/control.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    count: count,
                    confirm: confirm
                })
            })
            const data = await res.json()
            console.log(data)

            if (res.ok) {
                setInput({
                    name: '',
                    count: '',
                    confirm: ''
                })
            }
        } catch (err) {
            console.error(err);

        }

        // const existingData = JSON.parse(localStorage.getItem('data')) || [];
        // const updatedData = [...existingData, input];

        // localStorage.setItem('data', JSON.stringify(updatedData));
        // setInput({
        //     name: '',
        //     count: '',
        //     confirm: ''
        // })
    }

    return (
        <section className='h-screen bg-fixed pt-12 bg-top-right bg-white'>
            <Decoration ref={trigger} />

            <fieldset data-aos='fade-down'
                ref={trigger} className="fieldset bg-white/30 backdrop-blur-[5px] mt-10 text-black space-y-8 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-black text-2xl font-bold">RSVP</legend>

                <div>
                    <label className="label text-sm font-mono text-black">Nama</label>
                    <input name='name' value={name} onChange={handleInput}
                        type="text" className="input bg-slate-900 text-white" placeholder="Nama" />
                </div>

                <div>
                    <label className="label text-sm font-mono text-black">Jumlah Tamu</label>
                    <input name='count' value={count} onChange={handleInput}
                        type="number" className="input bg-slate-900 text-white" placeholder="Jumlah Tamu" />
                </div>

                <div ref={trigger}>
                    <label className="label text-sm font-mono text-black">Kehadiran</label>
                    <select name='confirm' value={confirm} onChange={handleInput}
                        className="select bg-slate-900 text-white">
                        <option disabled={true}>Kehadiran</option>
                        <option value={'Hadir'}>Hadir</option>
                        <option value={'Tidak Hadir'}>Tidak Hadir</option>
                    </select>
                </div>

                <button onClick={handleSubmit} className="btn btn-outline mt-4"
                    style={{ boxShadow: 'inset 0 0 5px black' }}>Konfirmasi</button>
            </fieldset>

            <Data_rsvp />
        </section>
    )
}

export default Rsvp