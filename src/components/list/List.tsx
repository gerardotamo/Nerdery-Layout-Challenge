import { BaseColor } from '../../config/color'
import { Rectangule } from '../Rectangule/Rectangule'
import { Text } from '../Text/Text'
import * as style from './styled'
import { IconType } from 'react-icons/lib'

interface Props {
    options: {
        name:string,
        icon: IconType
    }[],
    position?: number,
    handleClick?: (pos: number) => void
}



const List = ({ options, position = -1, handleClick = ()=>{} }: Props) => {
    const flag: boolean = (position !== -1);

    return (
        <style.List flag={!flag}>
            {
                options.map((item, index:number) => {
                    const color = position === index ? BaseColor.whiteColor : BaseColor.inactiveGrayColor

                    return (
                        <style.Item onClick={()=> handleClick(index)}>
                            {
                               flag &&
                                <style.SelectRectangule color={position === index ? BaseColor.whiteColor : 'transparent'} />
                            }
                            
                            <item.icon  color={flag ? color : 'white'}  style={{marginRight: "5px"}}/>
                            <Text color={flag ? color : BaseColor.secondaryGrayColor} size={10}>
                                {item.name}
                            </Text>
                        </style.Item>
                    )
                })
            }
        </style.List>
    )
}

export default List;
