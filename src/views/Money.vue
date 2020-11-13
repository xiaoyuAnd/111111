<template>
<Layout class-prefix="layout">
    {{recordList}}
    <NumberPad :value.sync='record.amount' @updata:value="onUpdataAmount" @submit='saveRecord' />
    <Types :value.sync='record.types' />
    <Notes @update:value="onUpdateNotes" />
    <Tags :data-source.sync="tags" @updata:selected='onUpdataTags' />
</Layout>
</template>

<script lang="ts">
import Types from '@/components/Moneys/Types.vue';
import Notes from '@/components/Moneys/Notes.vue';
import Tags from '@/components/Moneys/Tags.vue';
import NumberPad from '@/components/Moneys/NumberPad.vue';

import Vue from 'vue'
import {
    Component,
    Watch
} from 'vue-property-decorator';

import recordListModel from '@/models/recordListModel';

type RecordItem = {
    tags: string[];
    notes: string;
    types: string;
    amount: number; // 数据类型 object | string
    createdAt? : Date; // 类 / 构造函数
}
const recordList = recordListModel.fetch();
@Component({
    components: {
        Tags,
        Notes,
        Types,
        NumberPad
    }
})
export default class Money extends Vue {
    tags = ['衣', '食', '住', '行', '医疗', '购物'];
    recordList = recordList
    record: RecordItem = {
        tags: [],
        notes: '',
        types: '-',
        amount: 0
    }
    onUpdataTags(value: string[]) {
        this.record.tags = value
    }
    onUpdateNotes(value: string) {
        this.record.notes = value;
    }
    onUpdataTypes(value: string) {
        this.record.types = value

    }
    onUpdataAmount(value: string) {
        this.record.amount = parseFloat(value)

    }
    saveRecord() {
        const record2 = recordListModel.clone(this.record);
        record2.createdAt = new Date();
        this.recordList.push(record2)
        console.log(this.recordList)
    }
    @Watch('recordList')
    onRecordListChange() {
        recordListModel.save(this.recordList);
    }

}
</script>

<style lang="scss">
.layout-content {
    display: flex;
    flex-direction: column-reverse;
}
</style>
