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
}



const List = ({ options, position = -1 }: Props) => {

    return (
        <style.List flag={position}>
            {
                options.map((item, index) => {
                    const color = position === index ? BaseColor.whiteColor : BaseColor.inactiveGrayColor

                    return (
                        <style.Item >
                            {
                                !position &&
                                <style.SelectRectangule color={position === index ? BaseColor.whiteColor : 'transparent'} />
                            }
                            
                            <item.icon  color={!position ? color : 'white'}  style={{marginRight: "5px"}}/>
                            <Text color={!position ? color : BaseColor.secondaryGrayColor} size={10}>
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
