import { BaseColor } from '../../config/color';
import { Divider } from '../../config/Divider';
import { PieGrafic } from '../PieGrafic/PieGrafic';
import { Rectangule } from '../Rectangule/Rectangule';
import { Text } from '../Text/Text';
import * as style from './style';

const Aside = () => {
  const spaceTotal:number = 500;

  const data = [
    { name: 'Documents', value: 150, files: 720, space: 150, color: BaseColor.greenPrimaryColor },
    { name: 'Documents', value: 300, files: 720, space: 125, color: BaseColor.bluePrimaryColor },
    { name: 'Documents', value: 200, files: 720, space: 75, color: BaseColor.secondaryGrayColor },
    { name: 'Documents', value: 350, files: 720, space: 50.2, color: BaseColor.orangePrimaryColor },
  ];

  const sum : number = data.reduce((accumulator, item) => { return accumulator + item.space }, 0)
  const percent: number = ((sum / spaceTotal)*100 | 0);

  return (
    <style.Content color={BaseColor.fieldColor}>
      <style.View>
        <div style={{ display: 'flex' }}>
          <Rectangule backgroundColor={BaseColor.grayColor} borderColor='transparent' height={15} width={15} />
          <Rectangule backgroundColor={BaseColor.grayColor} borderColor='transparent' height={15} width={15}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text color={BaseColor.primaryColor} size={12}>Name</Text>
          <style.Avatar src='https://i.pravatar.cc/300' />
        </div>
      </style.View>
      <Divider style={{ padding: '0px' }} color={BaseColor.dividerFieldColor} />
      <style.ViewDetail>
        <Text color={BaseColor.primaryColor} size={20}> Storage</Text>
        <div style={{ display: "flex", position: 'relative', flexDirection: 'column', alignItems: 'center' }}>
          <PieGrafic data={data} />
          <div style={{ top: "65px", left: "70px", position: "absolute", alignItems: 'center' }}>
            <style.ViewPie style={{ alignItems: 'center' }}>
              <Text color={BaseColor.primaryColor} size={24} style={{ margin: '0px' }}>
                {percent}
              </Text>
              <Text color={BaseColor.primaryColor} size={16} style={{ margin: '0px' }}> %</Text>
            </style.ViewPie>
            <Text color={BaseColor.inactiveGrayColor} size={14} > Used</Text>
          </div>
          <Text color={BaseColor.inactiveGrayColor} size={8} style={{ marginTop: '22px' }}>
            {sum} GB of 500 GB used
          </Text>
        </div>
      </style.ViewDetail>
    


    </style.Content>
  )
}

export default Aside;
