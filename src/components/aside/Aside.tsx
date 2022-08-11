import { BaseColor } from '../../config/color';
import { Divider } from '../../config/Divider';
import { Rectangule } from '../Rectangule/Rectangule';
import { Text } from '../Text/Text';
import * as style from './style';

const Aside = () => {
  return (
    <style.Content color={BaseColor.fieldColor}>
      <style.View>
        <div style={{ display: 'flex' }}>
          <Rectangule backgroundColor={BaseColor.grayColor} borderColor='transparent' />
          <Rectangule backgroundColor={BaseColor.grayColor} borderColor='transparent' />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Text color={BaseColor.primaryColor} size={12}>Name</Text>
          <style.Avatar src='https://i.pravatar.cc/300' />
        </div>
      </style.View>
      <Divider style={{ padding: '0px' }} color={BaseColor.dividerFieldColor} />
      <style.ViewDetail>
        <Text color={BaseColor.primaryColor} size={20}> Storage</Text>
      </style.ViewDetail>
    </style.Content>
  )
}

export default Aside;
