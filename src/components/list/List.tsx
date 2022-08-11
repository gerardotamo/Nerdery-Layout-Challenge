import { BaseColor } from '../../config/color'
import { Text } from '../Text/Text'
import * as style from './styled'

interface Props {
    options: string[],
    position: number
}



const List = ({ options, position }: Props) => {
    return (
        <style.List>
            {
                options.map((item, index) => {
                    return (
                        <style.Item>
                            <style.SelectRectangule color={position === index ? BaseColor.whiteColor : 'transparent'}/>
                            <Text color={position === index ? BaseColor.whiteColor: BaseColor.inactiveGrayColor} size={10}>
                                {item}
                            </Text>
                        </style.Item>
                    )
                })
            }
        </style.List>
    )
}

export default List;
