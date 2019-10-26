import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import { orders } from './orders'
import { ScrollView } from 'react-native-gesture-handler';
import { navigation } from 'react-navigation'
export default class App extends Component {
    static navigationOptions = { title: 'Home' }
    constructor(props) {
        super(props);
        this.state = { methodPayment: '' }
    }

    somaItens() {
        const totalItens = orders.list.reduce((initial, total) => initial += total.totalItems, 0)
        return (totalItens)
    }
    somaValue() {
        const valorTotal = orders.list.reduce((initial, total) => initial += total.totalValue, 0)
        return (
            valorTotal.toFixed(2)
                .replace('.', ',')
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'))
    }
    filterStatusInvoiced(valueStatus) {
        const statusOrder = orders.list.filter((list) => {
            return list.status === valueStatus;
        }).map(({ orderId, clientName, statusDescription }) => {
            return (
                <View key={orderId}>
                    <Text>{orderId}</Text>
                    <Text>{clientName}</Text>
                    <Text>{statusDescription}</Text>
                </View>
            )
        })
        return (statusOrder)
    }

    filterPayment() {
        const paymentFiltered = orders.list.filter((list) => {
            return list.paymentNames == + this.state.methodPayment;
        }).map(({ orderId, clientName, paymentNames, totalValue }) => {
            return (
                <View key={orderId} style={styles.info} >
                    <Text>Id:{orderId}</Text>
                    <Text>Nome do cliente:{clientName}</Text>
                    <Text>Metodo de pagamento:{paymentNames}</Text>
                    <Text>
                        Valor total:R${
                            totalValue.toFixed(2)
                                .replace('.', ',')
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
                        }
                    </Text>
                </View>
            )
        })
        return (paymentFiltered)
    }
    showInfo() {
        if (orders.list) {
            return orders.list.map((list, info) => {
                return (
                    <View key={info} style={styles.info}>
                        <Text style={{ fontSize: 16 }}>
                            Id: {list.orderId}
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                            Nome: {list.clientName}
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                            Data: {list.creationDate}
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                            Status: {list.statusDescription}
                        </Text>
                        <Text style={{ fontSize: 16 }}>
                            Itens do pedido: {list.totalItems}
                        </Text>
                    </View>
                )
            })
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log(navigate)
        return (
            <View style={styles.container}>
                <Button
                    title="Filtros"
                    onPress={() => navigate('Filter')}
                />
                <View style={styles.total}>
                    <Text style={{ fontSize: 18 }}>
                        {`Total Itens=${this.somaItens()}`}
                    </Text>
                    <Text style={{ fontSize: 18 }}>
                        {`Valor total=R$${this.somaValue()}`}
                    </Text>
                </View>
                <ScrollView>
                    {this.showInfo()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 20,

    },
    info: {
        margin: 10,
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 20,

    },
    total: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

});
