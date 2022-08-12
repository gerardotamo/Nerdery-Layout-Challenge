import { RecentlyCard } from '../../components/RecentlyCard/RecentlyCard';
import { Rectangule } from '../../components/Rectangule/Rectangule';
import { Text } from '../../components/Text/Text';
import { BaseColor } from '../../config/color';
import * as style from './style'


const Home = () => {
  
  const recentlyOpen = [
    {id: 0, name: "App Proyect", created: "20.02.2020", open: 2},
    {id: 1, name: "Project: fitbit", created: "28.02.2020", open: 2},
    {id: 2, name: "Client Documents", created: "4.03.2020", open: 4},
  ]
  
  return (
    <style.Content>
      <Rectangule backgroundColor={BaseColor.whiteColor} borderColor='transparent'
        borderRadius={5} height='29px' width='100%'
        style={{ display: 'flex', alignItems: 'center', paddingInline: '12px' }}
      >
        <Rectangule backgroundColor='transparent' borderColor={BaseColor.accentGrayColor}
          borderRadius={0} height='15px' width='15px'
        />
        <style.TextInput placeholder={'search'} />
      </Rectangule>

      <style.View style={{
        justifyContent: 'space-between', alignItems: 'center',
        marginBlock: '3%'
      }}>
        <Text color={BaseColor.primaryColor} size={20}>
          Recently Used
        </Text>
        <style.View>
          <Rectangule backgroundColor='transparent' borderColor={BaseColor.primaryColor}
            borderRadius={1} height='15px' width='15px'
          />
          <Rectangule backgroundColor='transparent' borderColor={BaseColor.inactiveSecondaryGrayColor}
            borderRadius={1} height='15px' width='15px'
          />
        </style.View>
      </style.View>

      <style.View style={{flexFlow: 'row wrap'}}>
          {
            recentlyOpen.map((item, index) =>{
              return(
                <RecentlyCard data={item}/>
              )
            })
          }
      </style.View>
    </style.Content>
  )
}

export default Home;