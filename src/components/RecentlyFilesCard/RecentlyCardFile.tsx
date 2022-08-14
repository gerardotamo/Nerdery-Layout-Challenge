import * as style from './style'
import { RecentlyFiles } from '../../interfaces/recentlyFiles'
import { Text } from '../Text/Text'
import { BaseColor } from '../../config/color'
import { Rectangule } from '../Rectangule/Rectangule'
import {BiDotsHorizontal} from 'react-icons/bi'
interface Props {
    data: RecentlyFiles
}

export const RecentlyCardFile = ({ data }: Props) => {
    return (
        <style.Tr>
            <style.Td>
                <Text color={BaseColor.primaryColor} size={12} style={{flexDirection:'row', 
                display:'flex', alignItems:'center', marginLeft:'10px'}}>
                    <Rectangule backgroundColor={data.color} borderColor='transparent'
                        borderRadius={5} height={"21px"} width={"21px"}
                    />
                    {data.name}
                </Text>
            </style.Td>
            <style.Td>
                <Text color={BaseColor.inactiveGrayColor} size={12}>
                    {data.members} members
                </Text>
            </style.Td>
            <style.Td>
                <Text color={BaseColor.inactiveGrayColor} size={12}>
                    {data.last_modified}
                </Text>
            </style.Td>
            <style.Td >
                    <BiDotsHorizontal color={BaseColor.inactiveGrayColor} style={{cursor:'pointer'}}/>
            </style.Td>
        </style.Tr>
    )
}
