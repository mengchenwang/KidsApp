import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  Layout,
  Text,
  useTheme,
  List,
  ListItem,
  Button,
  Icon,
} from '@ui-kitten/components';
import {DateFnsService} from '@ui-kitten/date-fns';
import {StarIcon} from '../../components/icons';
import {SafeArea} from '../../components/safeArea';

export const Missions = () => {
  const [stars, setStars] = useState<number>(0);
  const starIconRef = useRef<Icon<any>>(null);

  const [mission, setMission] = useState<string>('');
  const [missionItems, setMissionItems] = useState<string[]>([]);
  const theme = useTheme();

  const handleAddMission = () => {
    Keyboard.dismiss();
    setMissionItems([...missionItems, mission]);
    setMission('');
  };

  const completeMission = (index: number) => {
    let itemsCopy = [...missionItems];
    itemsCopy.splice(index, 1);
    setMissionItems(itemsCopy);
  };

  const getItemColor = (index: number) => {
    const colorMap = [
      theme['red-400'],
      theme['orange-400'],
      theme['yellow-400'],
      theme['green-400'],
      theme['blue-400'],
      theme['indigo-400'],
      theme['purple-400'],
    ];

    return colorMap[index % 7];
  };

  const dateService = new DateFnsService();
  const date = dateService.format(new Date(), 'iii do MMM');

  return (
    <SafeArea>
      <Layout style={styles.missionsWrapper}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: theme['color-basic-100'],
              textShadowColor: theme['color-primary-500'],
            },
          ]}>
          Missions
        </Text>
        <Layout style={styles.subTitle}>
          <Text style={[styles.date, {color: theme['color-basic-100']}]}>
            {date}
          </Text>
          <StarIcon
            ref={starIconRef}
            animation="pulse"
            style={styles.star}
            fill={theme['yellow-500']}
          />
          <Text
            style={[
              styles.starsCount,
              {
                color: theme['yellow-500'],
                textShadowColor: theme['color-primary-500'],
              },
            ]}>
            {stars}
          </Text>
        </Layout>

        <KeyboardAvoidingView behavior="padding" style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: theme['color-basic-100'],
                borderColor: theme['color-primary-500'],
              },
            ]}
            placeholder="new mission!"
            value={mission}
            onChangeText={text => setMission(text)}
          />
          <TouchableOpacity
            onPress={() => {
              handleAddMission();
            }}>
            <Layout
              style={[
                styles.addWrapper,
                {
                  backgroundColor: theme['color-basic-100'],
                  borderColor: theme['color-primary-500'],
                },
              ]}>
              <Text
                style={[styles.addText, {color: theme['color-primary-500']}]}>
                +
              </Text>
            </Layout>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <List
          style={styles.list}
          data={missionItems}
          renderItem={({item, index}) => (
            <ListItem
              style={[styles.listItem, {backgroundColor: getItemColor(index)}]}
              title={props => (
                <Text
                  {...props}
                  style={[styles.itemTitle, {color: theme['color-basic-100']}]}>
                  {item}
                </Text>
              )}
              accessoryRight={() => (
                <Button
                  size="small"
                  onPress={() => {
                    completeMission(index);
                    setStars(stars + 1);
                    starIconRef.current?.startAnimation();
                  }}>
                  Complete!
                </Button>
              )}
            />
          )}
        />
      </Layout>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  missionsWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  sectionTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 2,
    alignSelf: 'center',
  },
  subTitle: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontSize: 22,
    lineHeight: 30,
  },
  star: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  starsCount: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 30,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 1,
  },
  list: {
    marginTop: 80,
    marginBottom: 80,
    backgroundColor: 'transparent',
  },
  listItem: {
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  inputWrapper: {
    position: 'absolute',
    top: 155,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
  },
});
