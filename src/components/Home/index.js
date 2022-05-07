import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import {
  getCategory,
  getCta,
  getPartner,
  getStores,
  fetchAllStores,
} from '../../services/utilities/api';
import {ScrollView} from 'react-native-gesture-handler';
import {colors, fontSize, sizes} from '../../services';
import {styles} from './style';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import images from '../../services/utilities/images';
import Autocomplete from '../AutoComplete';
import whereCategory from '../../assets/postal_codes.json';
import {SvgUri} from 'react-native-svg';
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';

export default function Home({navigation}) {
  const [category, setCategory] = useState([]);
  const [storesCount, setStoresCount] = useState(0);
  const [ctaCategory, setCtaCategory] = useState([]);
  const [selectedPartners, setSelectedPartners] = useState([]);
  const [service, setService] = useState('');
  const [currentLat, setCurrentLat] = useState('');
  const [currentLng, setCurrentLng] = useState('');
  const [selectedLat, setSelectedLat] = useState('');
  const [selectedLng, setSelectedLng] = useState('');

  useEffect(() => {
    getData();
    getStoreCount();
    getCtaCategory();
    getSelectedPartners();
    getCurrentLocation();
  }, []);

  const getData = async () => {
    let response = await getCategory();
    let temp = [];
    let data = response?.data?.data?.map(i => {
      let obj = {
        title: i.name,
        id: i.id,
        icon: i.icon,
        cta: i.cta,
      };
      temp.push(obj);
    });
    setCategory(temp);
  };

  const getStoreCount = async () => {
    let response = await getStores();
    setStoresCount(response?.data?.data?.count);
  };

  const getCtaCategory = async () => {
    let response = await getCta(false);
    setCtaCategory(response?.data?.data?.filter(cat => cat?.cta === true));
  };

  const getSelectedPartners = async () => {
    let response = await getPartner();
    setSelectedPartners(response?.data?.data);
  };

  const getCurrentLocation = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted) {
        Geolocation.getCurrentPosition(
          position => {
            setCurrentLat(position.coords.latitude);
            setCurrentLng(position.coords.longitude);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getInputValue = (value, status) => {
    if (status === '"What"') {
      setService(value);
    } else if (status === '"Where"' && value.title !== 'Nearby') {
      Geocoder.init('AIzaSyDyHw1ODJ-q3HKSneTCp6N66sKaLLjx-84');
      Geocoder.from(value.title)
        .then(json => {
          let location = json.results[0].geometry.location;
          console.log(location);
          setSelectedLat(location.lat);
          setSelectedLng(location.lng);
        })
        .catch(error => console.log(error));
    } else if (value.title === 'Nearby') {
      setSelectedLat(currentLat);
      setSelectedLng(currentLng);
    }
  };

  const searchServices = async () => {
    if (service && !selectedLat) {
      let coordinates = {
        lat: currentLat,
        lng: currentLng,
      };
      let response = await fetchAllStores(30, coordinates, service.id, false);
      navigation.navigate('SearchScreen', {
        data: response.data.data,
      });
    } else if (!service && !selectedLat) {
      let coordinates = {
        lat: currentLat,
        lng: currentLng,
      };
      let response = await fetchAllStores(30, coordinates, false);
      navigation.navigate('SearchScreen', {
        data: response.data.data,
      });
    } else if (selectedLat && !service) {
      let coordinates = {
        lat: selectedLat,
        lng: selectedLng,
      };
      let response = await fetchAllStores(30, coordinates, false);
      navigation.navigate('SearchScreen', {
        data: response.data.data,
      });
    } else {
      let coordinates = {
        lat: selectedLat,
        lng: selectedLng,
      };
      let response = await fetchAllStores(30, coordinates, service.id, false);
      navigation.navigate('SearchScreen', {
        data: response.data.data,
      });
    }
    // navigation.navigate('SearchScreen');
  };

  return (
    <ScrollView>
      <View style={styles.imgContainer}>
        <Image source={images.bg} resizeMode="cover" style={styles.image} />

        <View style={styles.logoContainer}>
          <View style={styles.header}>
            <View>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <SimpleLineIcons
                  name="menu"
                  color={colors.gray}
                  size={sizes.icons.large}
                  style={styles.hamberg}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Image source={images.logo} style={styles.logo} />
            </View>
          </View>

          <View style={styles.headerView}>
            <Text style={styles.headerText}>
              Find the best service providers
            </Text>
            <Text style={styles.searchText}>
              Search among {storesCount} service providers!
            </Text>

            <View style={styles.whatDropDown}>
              <Autocomplete
                data={category}
                name={'What'}
                setValue={getInputValue}
              />
            </View>

            <View style={styles.whereDropDown}>
              <Autocomplete
                data={whereCategory}
                name={'Where'}
                setValue={getInputValue}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.searchView}
                onPress={searchServices}>
                <View>
                  <Text style={{fontSize: fontSize.h6, color: colors.snow}}>
                    Search
                  </Text>
                </View>
                <View style={styles.searchIconView}>
                  <Image source={images.searchIcon} style={styles.searchIcon} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        {ctaCategory?.map((item, index) => {
          return (
            <TouchableOpacity style={styles.card} key={index}>
              <SvgUri
                width={sizes.images.large}
                height={sizes.images.large}
                uri={item?.icon}
                // stroke='red'
                // strokeWidth={5}
                // strokeOpacity={0}
                style={styles.categoryIcon}
                fill={'#fff'}
              />
              <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.CTAView}>
        <Text style={styles.CTAHeading}>Service providers in major cities</Text>
        <TouchableOpacity style={styles.CTACard}>
          <Image
            source={images.ctaImg1}
            resizeMode="cover"
            style={styles.ctaImage}
          />
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaText}>Aarhus</Text>
            <Text style={styles.cardText}>1115 companies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CTACard}>
          <Image
            source={images.ctaImg2}
            resizeMode="cover"
            style={styles.ctaImage}
          />
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaText}>København</Text>
            <Text style={styles.cardText}>4200 companies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CTACard}>
          <Image
            source={images.ctaImg3}
            resizeMode="cover"
            style={styles.ctaImage}
          />
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaText}>Odense</Text>
            <Text style={styles.cardText}>1122 companies</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CTACard}>
          <Image
            source={images.ctaImg4}
            resizeMode="cover"
            style={styles.ctaImage}
          />
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaText}>Vejle</Text>
            <Text style={styles.cardText}>412 companies</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.selectedPartnerView}>
        <Text style={styles.CTAHeading}>Selected partners</Text>
        {selectedPartners?.map((item, index) => {
          return (
            <TouchableOpacity style={styles.selectedPartnerCard} key={index}>
              <Image
                source={{uri: item?.banner}}
                resizeMode="cover"
                style={styles.selectedPartnerImg}
              />
              <View style={{paddingHorizontal: sizes.TinyMargin}}>
                <Text style={styles.selectedPartnerText}>
                  {item.title}
                  {item.claimStatus === 'claimed' && (
                    <AntDesign
                      name="checkcircle"
                      color={colors.appBgColor2}
                      size={sizes.icons.small}
                    />
                  )}
                </Text>
                <View style={styles.ratingCard}>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={item?.rating}
                    starSize={sizes.icons.small}
                    starStyle={{marginRight: sizes.TinyMargin}}
                    fullStarColor={colors.appBgColor2}
                    // selectedStar={(rating) => }}
                  />
                  <Text style={styles.ratingText}>{item?.noOfReviews}</Text>
                  <Text>|</Text>
                  {item?.priceCategory === 1 ? (
                    <TouchableOpacity>
                      <Text style={styles.bold}>
                        <Text style={styles.dollar}>$</Text>$$
                      </Text>
                    </TouchableOpacity>
                  ) : item?.priceCategory === 2 ? (
                    <TouchableOpacity>
                      <Text style={styles.bold}>
                        <Text style={styles.dollar}>$$</Text>$
                      </Text>
                    </TouchableOpacity>
                  ) : item?.priceCategory === 3 ? (
                    <TouchableOpacity>
                      <Text style={styles.bold}>
                        <Text style={styles.dollar}>$$$</Text>
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <Text>$$$</Text>
                  )}

                  <Text>|</Text>

                  <View style={styles.row}>
                    <View>
                      <TouchableOpacity>
                        <Text
                          ellipsizeMode="tail"
                          numberOfLines={1}
                          style={styles.categoryName}>
                          {item?.mainCategory?.name}{' '}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      {item?.mainCategory?.icon.endsWith('svg') ? (
                        <SvgUri
                          width={sizes.icons.large}
                          height={sizes.icons.large}
                          uri={item?.mainCategory?.icon}
                        />
                      ) : (
                        <Image
                          source={{uri: item?.mainCategory?.icon}}
                          style={styles.imgIcon}
                        />
                      )}
                      <Image
                        source={{uri: item?.mainCategory?.icon}}
                        resizeMode="cover"
                        style={styles.cardImg}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.divider} />
              </View>
              <View style={styles.locationView}>
                <TouchableOpacity>
                  <View style={styles.row}>
                    <Ionicons
                      name="location"
                      color={colors.appTextColor4}
                      size={sizes.icons.medium}
                    />
                    {item.address?.split(',')[1]?.split(' ')[1] && (
                      <Text style={styles.address}>
                        {item.address?.split(',')[1]?.split(' ')[1]},
                        {item.address?.split(',')[1]?.split(' ')[2]}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
                {item?.pricingPlan?.addOns?.some(
                  dat => dat?.type == 'Booking System',
                ) ? (
                  <TouchableOpacity>
                    <View style={styles.bookNowBtn}>
                      <Text style={styles.bookNowText}>Book now</Text>
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
