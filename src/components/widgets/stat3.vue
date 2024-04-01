<script>
export default {
    props: {
        widgetData: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<template>
    <div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" v-for="item in widgetData" :key="item.id">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 me-3">
                        <div class="avatar-sm">
                            <div class="avatar-title rounded-circle font-size-12">
                                <i :class="`fas ${item.icon}`"></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <p class="text-muted mb-1">{{item.title}}</p>
                        <h5 class="font-size-16 mb-0">{{item.subtext}}</h5>
                    </div>
                    <div class="flex-shrink-0 align-self-end">
                        <div class="badge badge-soft-success ms-2">{{item.progress}} <i class="uil uil-arrow-up-right text-success ms-1"></i></div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>