import { useEffect } from "preact/hooks";
import { ascii, icon } from "../../colors.mjs";
import { Window } from "../essentials/Window";
import { banana, initAllSliders, startSlider } from "bananaslider";
import Bar from "../essentials/Bar.jsx";
import Content from "../essentials/Content.jsx";
import Wallpaper from "../essentials/Wallpaper.jsx";
import { highlights } from "../../../config/content.mjs";
export function Homepage(props) {


    useEffect(() => {
        const user = 'root@web:/# '
        const cmd = document.querySelector('#cmd')
        cmd.innerHTML = ''
        const userWrite = (text) => { cmd.innerHTML = text }
        const userAppend = (text) => { cmd.innerHTML += text }
        let oldtext = cmd.innerHTML
        userWrite(user)
        const init = digitation('cat ./user/welcome.burr', 40, 200,
            (text) => {
                userWrite(user + text)
            },
            () => {
                oldtext = cmd.innerHTML
                // userWrite(oldtext + '\nLoading archive [64kb]')
                setTimeout(() => {
                    userAppend(ascii + '\nVersion: 0.0.1\nGithub: https://github.com/Kruceo')
                    userAppend('\n' + user)
                    setTimeout(() => {
                        oldtext = cmd.innerText
                        digitation('Welcome from Kruceo!', 100, 500, (text2) => {

                            userWrite(oldtext + text2)

                        }, () => setTimeout(() => {
                            userAppend('\n' + user)
                        }, 1000))
                    }, 2000)

                }, 1000)
            })


        initAllSliders()
    })
    const sectionStyle = { height: 'calc(100vh - 45px)', display: "flex", justifyContent: "center", alignItems: "center", borderBottom: '#0003 1px solid' }
    return <>

        <Bar></Bar>
        <Wallpaper></Wallpaper>
        <Content>
            <section style={sectionStyle}>
                <div>
                    <Window width="1000px" height="500px" title="Welcome">
                        <p style={{
                            boxSizing: 'border-box',
                            fontSize: '25px',
                            fontFamily: 'space mono',
                            display: "flex",
                            padding: '5px',
                            color: "white",
                            width: '100%',
                            height: '100%',
                            whiteSpace: 'pre-wrap'
                        }} id="cmd">{'starting...'}</p>
                    </Window>
                </div>
            </section>
            <section style={sectionStyle}>
                <div>
                    <Window title="Highlights" width="1000px" height="500px">

                        <slider style={{ height: '1000px' }}>
                            {
                                highlights.map(each => {
                                    return <slide
                                        style={{
                                            width: '1000px'
                                        }}>
                                        <Card
                                            title={each.title}
                                            content={each.content}
                                            img={each.img}
                                            style={{
                                                width: "1000px"
                                            }}
                                        >

                                        </Card>
                                    </slide>
                                })
                            }
                        </slider>
                    </Window>
                </div>
            </section>

            <section style={sectionStyle}>
                <div>
                    <Window title="Highlights" width="1000px" height="500px">
                        <header style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}></header>
                    </Window>
                </div>
            </section>
            <div style={{ height: "100vh" }}></div>
        </Content>
    </>
}


function* letterGenerator(content) {
    let ctt = content.split('')
    for (let i = 0; i < ctt.length; i++) {
        yield ctt[i]
    }
}

function digitation(content, min, max, callback, onclose) {

    const dig = letterGenerator(content)
    const clbk = callback ?? new Function('return null')
    let random = () => {
        const rdm = (min + Math.random() * max) - min
        return rdm
    }
    let text = ''
    const write = (time) => {
        setTimeout(() => {
            const next = dig.next()
            if (!next.done) {
                text += '' + next.value + ''
                clbk(text)
                write(random())
            }
            else { onclose() }
        }, time);
    }

    write(1000)
}

function Card(props) {
    // alert(img.width)

    return <div style={{ width: "100%", height: "100%", background: '#0000', }}>
        <div style={{ height: "100%", padding: "10px", display: "grid", gridTemplateColumns: '1fr 1fr', boxSizing: 'border-box' }}>
            <div style={{
                borderRadius: '10px',
                height: '425px',
                width: '425px',
                backgroundImage: 'url(' + (props.img ?? icon) + ')',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'center',
                boxShadow:'0px 0px 30px #0008'
            }} />
            <div style={{ color: 'white', width: "100%" }} >
                <h2>
                    {props.title ?? 'Title'}
                </h2>
                <p>
                    {props.content ?? 'text'}
                </p>
            </div>
        </div>
    </div>
}


