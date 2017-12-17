import React , {Component} from 'react';
import {CardSection , Card } from './common';
import {Text , TouchableWithoutFeedback , View , LayoutAnimation , UIManager} from 'react-native';
import * as actions from '../actions';
import {connect} from 'react-redux';


class ListItem extends Component {

    componentWillMount()
    {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    componentWillUpdate()
    {
          LayoutAnimation.spring();  
    }

    renderDescription()
    {
        const { library , selectedLibraryId , expanded } = this.props;

        if(expanded)
            {

                
                return (
                    <CardSection>
                    <Text style={{ flex : 1 }}> {this.props.library.description} </Text>
                    </CardSection>

                );
            }
    }

    render()
    {
        const {titleStyle} = styles ;
        const {title , id } = this.props.library;

        //console.log(this.props);

        return( 
            <TouchableWithoutFeedback
                onPress =  { () => this.props.selectLibrary(id) }  
            > 

                <View>  

                        <CardSection  >
                            <Text style={titleStyle}>
                                {title}
                            </Text>
                        </CardSection>
                        <View>
                            {this.renderDescription()}
                        </View>
                        
                        
                        

                </View>

            </TouchableWithoutFeedback>

         );
    };
}

const styles = {

    titleStyle : {
        fontSize : 18,
        paddingLeft : 15,

    }
};

const mapStateToProps = (state , ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.id

    return { expanded };
};


 
export default connect(mapStateToProps,actions) (ListItem) ;
