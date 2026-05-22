
import { scale,spacing } from '@/widgets/dimensions';
import { Dimensions, Platform, StyleSheet, View, Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>
        Home Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  heading1: {
    fontSize: scale(24),
    fontWeight: 'bold',
    marginBottom: spacing.md,
  },

});  
