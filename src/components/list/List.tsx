import { BaseColor } from '../../config/color'
import { Rectangule } from '../Rectangule/Rectangule'
import { Text } from '../Text/Text'
import * as style from './styled'

interface Props {
    options: string[],
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
                            <Rectangule backgroundColor='transparent' borderRadius={1}
                                borderColor={!position ? color : 'white'} height={"15px"} width={"15px"} />
                            <Text color={!position ? color : BaseColor.secondaryGrayColor} size={10}>
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
