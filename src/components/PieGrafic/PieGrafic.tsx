import { PieChart, Pie, Cell } from 'recharts';
import { BaseColor } from '../../config/color';
import { Item } from '../list/styled';
interface Props {
    data: {
        name: string,
        value: number,
        color: string
    }[]
}

export const PieGrafic = ({ data }: Props) => {
    const size = 139

    return (
        
            <PieChart width={size} height={size} style={{ transform: "rotate(-30deg)", marginTop: "22px" }}>
                <Pie data={data} dataKey="value" nameKey="name"
                    cx="50%" cy="50%" innerRadius={60} outerRadius={70}
                    fill="#8884d8" paddingAngle={5} width={20}
                    
                >
                    {
                        data.map((item, index) => <Cell key={`cell-${index}`} fill={item.color} />)
                    }
                </Pie>

            </PieChart>
       
    )
}
