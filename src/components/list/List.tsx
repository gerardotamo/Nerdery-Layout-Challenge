import { BaseColor } from '../../config/color'
import { Text } from '../Text/Text'
import * as style from './styled'

interface Props {
    options: string[],
    position?: number,
}



const List = ({ options, position }: Props) => {

    return (
        <style.List>
            {
                options.map((item, index) => {
                    const color = position === index ? BaseColor.whiteColor : BaseColor.inactiveGrayColor
                    
                    return (
                        <style.Item>
                            {
                                !position &&
                                <style.SelectRectangule color={position === index ? BaseColor.whiteColor : 'transparent'} />
                            }
                            <style.UlRectangule color={!position ? color : 'white'} />
                            <Text color={!position ? color : BaseColor.secondaryGrayColor } size={10}>
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
