
import { BaseColor } from '../../config/color'
import { Divider } from '../../config/Divider'
import { Data } from '../../interfaces/data'
import { Rectangule } from '../Rectangule/Rectangule'
import * as style from './style'

interface Props {
    data: Data
}
export const StorageDetail = ({ data }: Props) => {
    return (
        <style.Content>
            <style.Content style={{ marginBottom: '9px' }}>
                <Rectangule backgroundColor={data.color} borderRadius={8}
                    borderColor={data.color} height={28} width={28}
                />
            </style.Content>

        </style.Content>
    )
}
