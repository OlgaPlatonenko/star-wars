import React, { Component } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
        };

        componentDidMount() {
           this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                    });
                });
        }

        render() {

            const { data } = this.state;

            const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

            if (!data) {
                return <Spin indicator={antIcon} />;
            }

            return <View {...this.props} data={data} />;
        }
    };
};

export default withData;