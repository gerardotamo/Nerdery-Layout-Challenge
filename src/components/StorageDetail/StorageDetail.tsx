
import { BaseColor } from '../../config/color'
import { Divider } from '../../config/Divider'
import { Data } from '../../interfaces/data'
import { Rectangule } from '../Rectangule/Rectangule'
import { Text } from '../Text/Text'
import * as style from './style'

interface Props {
    data: Data
}
export const StorageDetail = ({ data }: Props) => {
    return (
        <style.Content>
            <style.Content style={{ marginBottom: '9px', marginTop: '8px' }}>
                <Rectangule backgroundColor={data.color} borderRadius={8}
                    borderColor={data.color} height={"28px"} width={"28px"}
                />
                <div style={{display:'flex', flexDirection:'column' }}>
                    <Text color={BaseColor.primaryColor} size={10} style={{margin:"0px"}}>
                        {data.name}
                    </Text>
                    <Text color={BaseColor.inactiveGrayColor} size={8} style={{margin:"0px"}}>
                        {data.files} files
                    </Text>
                </div>
            </style.Content>
            <style.Content>
                <Text size={8} color={BaseColor.primaryColor}>
                    {data.space | 0} GB
                </Text>
            </style.Content>
        </style.Content>
    )
}
