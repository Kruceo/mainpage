import { locale } from "../../../lib/lang"
import "./Welcome.less"

export default function Welcome() {
    // return <Content className=" first"><iframe className="welcome" src="https://kruceo.com/wallpaper" frameBorder={0} style={{ width: "100%" }}>
    //     <h2 style={{
    //         position: "absolute",
    //         left: 100,
    //         color: 'white',
    //         fontSize: 44,
    //         fontWeight: 'bold',
    //         textAlign: 'center'
    //     }}>Any good<br /> <span style={{ fontSize: 84, color: 'white', }}>welcome</span></h2>
    // </iframe>
    // </Content>
    return <section className="welcome">
        <div>
            <h2>{locale.welcome}</h2>
        </div>
    </section>
}