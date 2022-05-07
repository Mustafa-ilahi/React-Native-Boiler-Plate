import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Divider, TextInput} from 'react-native-paper';
import {SvgUri} from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors, fontSize, sizes} from '../../services';
import {styles} from './autoCompleteStyle';
import {useIsFocused} from '@react-navigation/native';

export default function Autocomplete({data, name, setValue}) {
  const [title, setTitle] = useState('');
  const [showList, setShowList] = useState(false);
  const [titles, setTitles] = useState();
  const [placeholder, setPlaceholder] = useState();
  const [titlesList, setTitlesList] = useState([]);
  const isFocused = useIsFocused();

  const handleTitle = text => {
    let list = titles.filter(e =>
      e.title.toLowerCase().includes(text.toLowerCase()),
    );
    setTitle(text);
    setTitlesList(list);
  };

  const handleSelect = item => {
    if (item.cta == false) {
      setValue(item, '"What"');
    } else {
      setValue(item, '"Where"');
    }
    setTitle(item.title);
    setTitlesList([]);
    // setShowList(false);
  };
  useEffect(() => {
    setTitles(data);
    setPlaceholder(name);
  }, [data]);
  useEffect(() => {
    setTitle('');
  }, [isFocused]);
  return (
    <View>
      <TextInput
        style={styles.inputField}
        right={
          title && (
            <TextInput.Icon
              onPress={() => setTitle('')}
              name={() => (
                <Entypo name="squared-cross" size={20} color={'#9B9492'} />
              )}
            />
          )
        }
        value={title}
        activeUnderlineColor="transparent"
        onChangeText={text => handleTitle(text)}
        placeholder={placeholder}
        onFocus={() => {
          setTitlesList(titles);
          setShowList(true);
        }}
        onBlur={() => {
          setTitlesList([]);
        }}
      />
      <ScrollView style={styles.container}>
        <FlatList
          data={titlesList}
          style={styles.flatList}
          renderItem={({item}) => (
            <View
              style={styles.flatListView}
              onTouchEnd={() => handleSelect(item)}>
              <TouchableOpacity style={styles.item}>
                <View style={{flexDirection: 'row'}}>
                  {item?.icon && item?.icon.endsWith('svg') ? (
                    <SvgUri
                      width={sizes.icons.large}
                      height={sizes.icons.large}
                      uri={item?.icon}
                      style={styles.svgIcon}
                    />
                  ) : (
                    <Image source={{uri: item?.icon}} style={styles.imgIcon} />
                  )}
                  {item?.nearMeIcon && (
                    <Image
                      source={{uri: item?.nearMeIcon}}
                      style={styles.imgIcon}
                    />
                  )}
                  <Text style={styles.rowText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
              <Divider />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
}
