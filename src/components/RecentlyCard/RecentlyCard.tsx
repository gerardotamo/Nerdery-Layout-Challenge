import * as style from './style'
import { BaseColor } from "../../config/color"
import { Recently } from "../../interfaces/recently"
import { Rectangule } from "../Rectangule/Rectangule"
import { Text } from '../Text/Text'
import {BiDotsVertical} from 'react-icons/bi'

interface Props {
    data: Recently
}

export const RecentlyCard = ({ data }: Props) => {

    function Open() {
        const aux = []
        for (let index = 0; index < data.open; index++) {
            aux.push(<Rectangule backgroundColor={BaseColor.whiteColor} borderColor={BaseColor.secondaryGrayColor}
                borderRadius={9} height='18px' width='18px' style={{ marginLeft: index === 0 ? "0px" : '-18px' }}>
                {
                    index === 2 ?
                        <Text color={BaseColor.primaryColor} size={8} >
                            +3
                        </Text>
                        :
                        <></>
                }
            </Rectangule>
            );
            if (index === 2) {
                break;
            }
        }
        return (
            <div style={{ display: 'flex' }}>
                {aux}
            </div>
        )
    }

    return (
        <Rectangule backgroundColor={BaseColor.whiteColor} borderColor="transparent"
            borderRadius={12} height="133px" width="29%" style={{ flex: "0 0 29%", marginRight: '4%' }}
        >
            <style.Content>
                <style.View style={{position:'absolute', right: '5px', cursor:'pointer'}}>
                    <BiDotsVertical color={BaseColor.inactiveGrayColor} />
                </style.View>
                <style.View style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: "100px"
                }}>
                    <style.View style={{
                        alignItems: 'center',
                        justifyContent:'space-between',                        
                        width: "70%"
                    }}>
                        <Rectangule backgroundColor={BaseColor.orangePrimaryColor} borderColor='transparent'
                            borderRadius={0} height='26px' width="26px" style={{ boxShadow: `-5px 5px 5px ${BaseColor.shadowOrangePrimaryColor}` }}
                        />
                        <Open />
                    </style.View>
                    <style.View style={{ flexDirection: 'column' }}>
                        <Text color={BaseColor.primaryColor} size={12} style={{marginBottom:'4px'}}>
                            {data.name}
                        </Text>
                        <Text color={BaseColor.inactiveGrayColor} size={8} >
                            created {data.created}
                        </Text>
                    </style.View>
                </style.View>
            </style.Content>
        </Rectangule>
    )
}
