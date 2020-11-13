<template>
<Layout class-prefix="layout">
    {{record}}
    <NumberPad :value.sync='record.amount' @updata:value="onUpdataAmount" />
    <Types :value.sync='record.types'  />
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
    Component
} from 'vue-property-decorator';

type Record = {
    tags: string[];
    notes: string;
    types: string;
    amount: number;
}

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
    record: Record = {
        tags: [],
        notes: '',
        types: '-',
        amount: 10
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
}
</script>

<style lang="scss">
.layout-content {
    display: flex;
    flex-direction: column-reverse;
}
</style>
