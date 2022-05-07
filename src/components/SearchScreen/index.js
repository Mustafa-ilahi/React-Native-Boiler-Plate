import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
// import MapView from 'react-native-map-clustering';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {colors, fontFamily, sizes} from '../../services';
import {styles} from './searchStyle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import images from '../../services/utilities/images';
import {SvgUri} from 'react-native-svg';
import {useIsFocused} from '@react-navigation/native';

export default function SearchScreen({route, navigation}) {
  const isFocused = useIsFocused();
  const {data} = route.params;
  const mapRef = React.createRef();

  const [region, setRegion] = useState({
    latitude: data ? data?.stores[0]?.location?.lat : '',
    longitude: data ? data?.stores[0]?.location?.long : '',
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });
  const [initialRegion, setInitialRegion] = useState({
    latitude: 56.2128493,
    longitude: 9.2998715,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  });
  updateLocation = location => {
    let newLocation = {
      latitude: location.lat,
      longitude: location.long,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };

    mapRef.current.animateToRegion({
      latitude: location.lat,
      longitude: location.long,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
    setRegion(newLocation);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            ref={mapRef}
            style={styles.map}
            rotateEnabled={true}
            initialRegion={region.latitude ? region : initialRegion}>
            {data?.stores?.length
              ? data.stores.map((item, index) => {
                  return (
                    <Marker
                      key={index}
                      cluster={false}
                      coordinate={{
                        latitude: item.location.lat,
                        longitude: item.location.long,
                      }}>
                      <View>
                        <Image source={images.marker} style={styles.markerBg} />
                        {item?.mainCategory?.icon.endsWith('svg') ? (
                          <SvgUri
                            width={sizes.icons.small}
                            height={sizes.icons.small}
                            uri={item?.mainCategory?.icon}
                            style={styles.markerIcon}
                          />
                        ) : (
                          <Image
                            source={{uri: item?.mainCategory?.icon}}
                            style={[styles.markerIconSize, styles.markerIcon]}
                          />
                        )}
                      </View>
                    </Marker>
                  );
                })
              : null}
          </MapView>
          <View style={styles.header}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                {/* onPress={() => navigation.navigate('Home')}> */}
                <SimpleLineIcons
                  name="menu"
                  color={colors.gray}
                  size={sizes.icons.large}
                  style={styles.hamberg}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{
                  backgroundColor: colors.snow,
                  zIndex: 2,
                  height: sizes.images.large,
                  width: sizes.images.large,
                  borderRadius: sizes.buttonRadius,
                  left: sizes.doubleBaseMargin * 6.5,
                  top: sizes.baseMargin,
                }}>
                <Image
                  source={images.logo}
                  style={{
                    height: sizes.images.large,
                    width: sizes.images.large,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{position: 'absolute', bottom: 0, left: sizes.baseMargin}}>
            <ScrollView horizontal={true}>
              {data?.stores?.length ? (
                data.stores.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPressIn={() => updateLocation(item.location)}
                      delayPressIn={0}
                      key={index}
                      style={styles.selectedPartnerCard}>
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
                          <Text style={styles.ratingText}>
                            {item?.noOfReviews}
                          </Text>
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
                                  {item?.mainCategory?.name}
                                </Text>
                              </TouchableOpacity>
                            </View>
                            <View>
                              {item?.mainCategory?.icon ? (
                                item?.mainCategory?.icon.endsWith('svg') ? (
                                  <SvgUri
                                    width={sizes.icons.large}
                                    height={sizes.icons.large}
                                    uri={item?.mainCategory?.icon}
                                  />
                                ) : (
                                  <Image
                                    source={{uri: item.icon}}
                                    style={styles.imgIcon}
                                  />
                                )
                              ) : (
                                <View style={{paddingBottom: sizes.TinyMargin}}>
                                  <Text> </Text>
                                </View>
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
                })
              ) : (
                <View style={styles.selectedPartnerCard2}>
                  <Text style={styles.selectedPartnerText2}>
                    Sorry, no stores serving in this area right now
                  </Text>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
