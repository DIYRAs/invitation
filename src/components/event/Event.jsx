import React from 'react'
import Event_components from './event_components'
import Countdown from './countdown'
import Map from './map'

const Event = () => {
    return (
        <section className='h-max pt-16 px-12 text-white bg-fixed bg-[100%_55%]'
            style={{ backgroundImage: 'url(assets/image/bg-orange-flower-2.jpg)' }}>
            <Event_components
                title={'AKAD'}
                date={'Minggu, 19 0 19 1999'}
                time={'Pukul: 19.09 WITA s.d. Selesai'}
                loc={'Rumah rumahan'}
                addr={'Jln. rumah hamur rumahan Pt.123admin#'} />

            <Countdown />

            <Event_components
                title={'RESEPSI'}
                date={'Minggu, 19 0 19 1999'}
                time={'Pukul: 00.00 WITA s.d. Selesai'}
                loc={'Rumah rumahan'}
                addr={'Jln. rumah hamur rumahan Pt.123admin#'} />

            <Map />
        </section>
    )
}

export default Event