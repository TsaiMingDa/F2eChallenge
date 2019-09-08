import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CloudDrive';
  uploadHind = true;
  creatNameShow = 'none';
  moreWrap = 'none';
  data = [];
  dataBackup = [];
  trash = [];
  locker = false;
  itemMouseOver = {
    cloud: false,
    trash: false
  };
  uploadFunction(e) {
    // console.log('click');
    e.stopPropagation();
    if (this.locker) {
      return;
    }
    this.uploadHind = !this.uploadHind;
  }
  uploadHindFunction() {
    this.uploadHind = true;
    this.data.forEach(v => {
      v.moreWrap = 'none';
    });
  }
  newFile(e){

  }
  newDocument(e) {
    const file = e.target.files[0];
    const fn = file.name;
    const ft = `assets/images/${this.fileType(fn)}.svg`;
    const fs = this.formatBytes(file.size);

    this.data.push({
      fileName: fn,
      fileSize: fs,
      fileType: ft,
      moreWrap: 'none'
    });
    this.backUpData();
  }
  fileType(fn) {
    const sp = fn.split('.');
    const type = sp[sp.length - 1];
    let dType;
    switch (type.toUpperCase()) {
      case 'DOCX':
        dType = 'DOCX';
        break;
      case 'XLSX':
        dType = 'XLSX';
        break;
      case 'PDF':
        dType = 'PDF';
        break;
      case 'JPG':
        dType = 'JPG';
        break;
      default:
        dType = 'uploadfilesx';
        break;
    }
    return dType;
  }
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0){
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  createFolder(e) {
    this.creatNameShow = 'flex';
  }
  creatNameHide() {
    this.creatNameShow = 'none';
  }
  inputFileName(folderN) {

    this.data.push({
      fileName: folderN.value,
      fileSize: this.formatBytes(0),
      fileType: 'assets/images/uploadfilesx.svg',
      moreWrap: 'none'
    });
    this.backUpData();
    this.creatNameHide();
  }
  moreWrapShow(e, idx) {
    e.stopPropagation();
    this.data[idx].moreWrap = 'block';
  }
  del(idx) {
    const delItem = this.data.filter((item, index) => {
      return idx === index;
     })
    console.log(delItem);
    this.trash = this.trash.concat(delItem);
     console.log(this.trash);
    this.data = this.data.filter((item, index) => {
      return idx !== index;
    });
  }
  trashData() {
    this.backUpData();
    this.data = this.trash;
  }
  oriData(e) {
    this.data = this.dataBackup;
  }
  searchFile(el) {
    const value = el.value;

    if (value === '') {
      this.data = this.dataBackup;
      return;
    }
    this.data = this.data.filter((currentValue) => {
      if (currentValue.fileName.indexOf(value) !== -1) {
        return true;
      }
    });
  }
  backUpData() {
    this.dataBackup = this.data.map(currentValue => currentValue);
  }
  itemClick(item) {
    if(item === 'cloud') {
      this.locker = false;
    }
    if(item === 'trash') {
      this.locker = true;
    }
    for(let key in this.itemMouseOver) {
       this.itemMouseOver[key] = false;
    }
    this.itemMouseOver[item] = true;
  }
}
