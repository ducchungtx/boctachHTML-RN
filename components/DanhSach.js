import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';

export default class DanhSach extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            mang: [],
            trang: 0
        };
    }

    loadMore() {
        this.setState({
            trang: this.state.trang + 1
        }, () => {
            fetch("http://localhost/grap/vnexpress/getvn.php?trang=" + this.state.trang)
            .then(res => res.json())
            .then(resData => {
                this.setState({
                    mang: this.state.mang.concat(resData)
                });
            })
            .catch(err => console.log(err));
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 50, backgroundColor: "#dbe7f9", justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Trang: {this.state.trang}</Text>
                </View>
                <FlatList
                    onEndReachedThreshold="0"
                    onEndReached={() => {this.loadMore()}}
                    data={this.state.mang}
                    renderItem={({ item }) =>
                        <View style={{ borderBottomWidth: 0.5, padding: 10 }}>
                            <Text style={{ color: 'red' }}>{item.TIEUDE}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{ flex: 1, alignSelf: 'stretch', width: null }}
                                        source={{ uri: item.URL }}
                                    />
                                </View>
                                <View style={{ flex: 2, paddingLeft: 10 }}>
                                    <Text>{item.TOMTAT}</Text>
                                </View>
                            </View>
                        </View>
                    }
                />
            </View>
        );
    }
    componentDidMount() {
        fetch("http://localhost/grap/vnexpress/getvn.php?trang=" + this.state.trang)
            .then(res => res.json())
            .then(resData => {
                this.setState({
                    mang: resData
                });
            })
            .catch(err => console.log(err));
    }
}