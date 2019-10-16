/* eslint-disable no-console */
import Component from '../components/component';
import { db } from './firebase';
import 'babel-polyfill';

// Сlass in which methods for working with the database are implemented
class DataBase extends Component {
  static setData(col, doc, data) {
    db.collection(col).doc(doc).set({ data })
      .then(() => {
        console.log('document successfully added!');
      })
      .catch(error => {
        console.error(error);
      });
  }

  // Get data from DB method and return promise.
  static async getData(col) {
    const outPutData = [];
    return db.collection(col).get()
      .then(querySnapshot => {
        /**
         * From each document get data and assign it to variable using destructuring
         * push received data to outPutData variable. Next step in the chain it's
         * return data. Asynchronous function to wait for data from the server.
         */
        querySnapshot.forEach((doc) => {
          const { data } = doc.data();
          outPutData.push(data);
        });
      }).then(() => outPutData)
      .catch(error => {
        console.error(error);
      });
  }

  static updateData(col, doc, data) {
    db.collection(col).doc(doc).update({ data })
      .then(() => {
        console.log('document successfully updated!');
      })
      .catch(error => {
        console.error(error);
      });
  }

  static removeData(col, doc) {
    db.collection(col).doc(doc).delete()
      .then(() => {
        console.log('document successfully deleted!');
      })
      .catch(error => {
        console.error(error);
      });
  }

  // This method are subscribe on event update data in database.
  static onUpdateData(col, fn) {
    db.collection(col).onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'modified') fn();
      });
    });
  }
}


export default DataBase;
