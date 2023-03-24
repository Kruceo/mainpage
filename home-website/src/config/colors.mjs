let lightMode = false

if(window && window.light && window.light == true){
  lightMode = true
}
export const blur = 'none'
export const rounded = '10px'
export const red = '#f99'
export const yellow = '#ff9'
export const green = '#9f9'
export const blue = '#99f'
export const orange = '#fc9'
export const lightBlue = '#9cf'
export const secondary = lightMode?'#ffff':'#323246ff'
export const primary = '#101010'
export const background = lightMode?'#245':'#ddddee'
export const text = lightMode?'#000':'#fff'
export const links = '#0f9'
export const ascii = 
`   ▄█   ▄█▄    ▄████████ ███    █▄   ▄████████    ▄████████  ▄██████▄  
  ███ ▄███▀   ███    ███ ███    ███ ███    ███   ███    ███ ███    ███ 
  ███▐██▀     ███    ███ ███    ███ ███    █▀    ███    █▀  ███    ███ 
 ▄█████▀     ▄███▄▄▄▄██▀ ███    ███ ███         ▄███▄▄▄     ███    ███ 
▀▀█████▄    ▀▀███▀▀▀▀▀   ███    ███ ███        ▀▀███▀▀▀     ███    ███ 
  ███▐██▄   ▀███████████ ███    ███ ███    █▄    ███    █▄  ███    ███ 
  ███ ▀███▄   ███    ███ ███    ███ ███    ███   ███    ███ ███    ███ 
  ███   ▀█▀   ███    ███ ████████▀  ████████▀    ██████████  ▀██████▀  
  ▀           ███    ███                                               
`

export const asciimobile = 
`
@@@@@@@@@@@@@@@@@@@@       
@@@\´\´\´\´\´\´\´\´\´\´\´\´\´\´\´\´\´       
@@@                  .@@@   
@@@                .@@@'    
@@@              .@@@'    @@@
@@@            .@@@'      @@@
@@@          .@@@'        @@@
@@@        .@@@'          @@@
@@@      .@@@'            @@@
@@@    .@@@'              @@@
     .@@@'                @@@
    @@@'                  @@@
        ,,,,,,,,,,,,,,,,,,@@@
        @@@@@@@@@@@@@@@@@@@@@
`

export const asciiDesktop = 
`
@@@@@@@@@@@@@@@@@@@@       
@@@+++++++++++++++++       
@@@                 .@@@   
@@@               .@@@'    
@@@             .@@@'   @@@
@@@           .@@@'     @@@
@@@         .@@@'       @@@
@@@       .@@@'         @@@
@@@     .@@@'           @@@
@@@   .@@@'             @@@
    .@@@'               @@@
   @@@'                 @@@
       =================@@@
       @@@@@@@@@@@@@@@@@@@@
`.replaceAll('@','█').replaceAll("'",'▀').replaceAll('.','▄').replaceAll('=','▄').replaceAll('+','▀').replaceAll(' ','.')

export const icon = '/img/logo.png'
export const wallpaperURL = 'https://i.pinimg.com/originals/8f/c5/3f/8fc53fc5d0336c5eec2921c0033e33fc.png'