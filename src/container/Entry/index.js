import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

/*-------- librery----------*/
import AsyncStorage from '@react-native-async-storage/async-storage';

/*-------- styles ----------*/
import styles from './styles';

/*-------- component ----------*/
import CardView from '../../component/CardView';
import Button from '../../component/Button';
import AddMember from '../../component/AddMember';

/*-------- assets ----------*/
import MemberIcon from '../../assets/icons/group.png';
import infoIcon from '../../assets/icons/info.png';


const Entry = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [update, setUpdate] = useState(false);
  const [listItem, setListItem] = useState([]);
  const [page, setPage] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    getData()
  },[update])

  const getData = async () => {
    setLoading(true);
    try {
      const value = await AsyncStorage.getItem('contactListData');
      
      if(value !== null) {
        let temp_var = [];
        if(JSON.parse(value).length > page-1){
          let filtered_array = JSON.parse(value).slice(0, page);

          filtered_array.forEach((temp_item)=>{
            temp_var.push(temp_item);
          })
          setLoading(false);
          setListItem(temp_var);
        }
        setLoading(false);
      }
    } catch(e) {
      setLoading(false);
      // error reading value
    }
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onAdd = async (contact_value) =>{
    setModalVisible(!isModalVisible);
    const listItem_temp = listItem;

    if(!listItem_temp.some(el => el.name === contact_value.name) && !listItem_temp.some(el => el.phoneNumber === contact_value.phoneNumber)){
      listItem_temp.push(contact_value);
      const jsonValue = JSON.stringify(listItem_temp);
      await AsyncStorage.setItem('contactListData', jsonValue);
      setUpdate(!update)
    }else{
      alert('This number is already into the contact')
    }
    
  }

  const onDelete = async (index) =>{
    const listItem_temp = listItem;
    listItem_temp.splice(index, 1)
    const jsonValue = JSON.stringify(listItem_temp);
    await AsyncStorage.setItem('contactListData', jsonValue);
    setUpdate(!update)
  }

  const loadMoreRandomData = async () =>{
    await setPage(Number(page)+5);
    getData()
  }

  const renderCustomItem = (item, index) =>{
    return(
      <CardView data={item.item} index={item.index} onDelete={onDelete}/>
    )
  }
  const renderFooter = () => {
    return (
      //Footer View with Load More button
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={loadMoreRandomData}
          //On Click of button load more data
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator
              color="white"
              style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.topHorizontalView}>
        <View style={styles.horizontalView}>
          <Image source={MemberIcon} style={styles.memberIcon}/>
          <Text style={styles.titleText}>Team members</Text>
        </View>
        <Image source={infoIcon} style={styles.memberIcon}/>
      </View>
      <View style={styles.cardMainView}>
        <FlatList
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{paddingBottom: 20}}
        data={listItem}
        renderItem={renderCustomItem}
        keyExtractor={(item,index) => index}
        // onEndReachedThreshold={0}
        // onEndReached={loadMoreRandomData}
        ListFooterComponent={renderFooter}
      />
      </View>
      <Button onBtnPress={toggleModal}/>
      <AddMember
        isModalVisible={isModalVisible}
        onAdd={onAdd}
      />
    </View>
  );
};

export default Entry;
