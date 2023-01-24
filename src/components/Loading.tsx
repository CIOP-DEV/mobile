import {ActivityIndicator, View} from 'react-native';

export function Loading (){
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E1E'}}>
      <ActivityIndicator size="large" color={"#7C3AED"} />
    </View>
  )
}
