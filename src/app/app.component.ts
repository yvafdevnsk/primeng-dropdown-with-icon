import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/components/common/selectitem';
import { Member } from './member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  memberNameList: string[];
  dropdownMemberList: SelectItem[];
  dropdownMemberMap: Map<number, Member>;
  selectedMember: Member;
  selectedMemberName: string;
  selectAllMember: boolean;

  constructor() {
    this.memberNameList = [];
    this.dropdownMemberList = [];
    this.dropdownMemberMap = new Map();
    this.selectedMemberName = '';
    this.selectAllMember = false;
  }

  ngOnInit() {
    this.memberNameList = this.getMemberNameList();

    for (let i = 0; i < this.memberNameList.length; i++) {
      let member: Member = new Member();
      member.id = i + 1;
      member.name = this.memberNameList[i];
      member.iconClass = (i % 2 === 0) ? 'pi pi-key' : 'pi pi-paperclip';
      member.checked = false;

      this.dropdownMemberList.push({label:member.name, value:member});
      this.dropdownMemberMap.set(member.id, member);
    }

    this.selectedMember = this.dropdownMemberMap.get(3);
    this.selectedMemberName = this.selectedMember.name;
  }

  onDropdownChange() {
    this.selectedMemberName = this.selectedMember.name;
  }

  onSelectAllMemberChange() {
    for (let member of this.dropdownMemberList) {
      member.value.checked = this.selectAllMember;
    }
  }

  getMemberNameList(): string[] {
    let memberNameList: string[] = [];

    memberNameList.push('譜久村聖');
    memberNameList.push('生田衣梨奈');
    memberNameList.push('石田亜佑美');
    memberNameList.push('佐藤優樹');
    memberNameList.push('小田さくら');
    memberNameList.push('野中美希');
    memberNameList.push('牧野真莉愛');
    memberNameList.push('羽賀朱音');
    memberNameList.push('加賀楓');
    memberNameList.push('横山玲奈');
    memberNameList.push('森戸知沙希');
    memberNameList.push('北川莉央');
    memberNameList.push('岡村ほまれ');
    memberNameList.push('山﨑愛生');

    return memberNameList;
  }

}
