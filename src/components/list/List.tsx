import { BaseColor } from '../../config/color'
import { Text } from '../../config/Text'
import * as style from './styled'
interface Props {
    options: string[]
}
const List = ({ options }: Props) => {
    return (
        <style.List>
            {
                options.map((item, index) => {
                    return (
                        <Text color={BaseColor.grayColor} size={10}>
                            {item}
                        </Text>
                    )
                })
            }
        </style.List>
    )
}

export default List;
