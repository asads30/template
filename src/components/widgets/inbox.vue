<script>
export default {
    data() {
        return {
            listInbox: [
                {
                    profile: require('@/assets/images/users/avatar-2.jpg'),
                    name: 'Daniel Pickering',
                    text: "Hey! there I'm available",
                    time: '02 min'
                },
                {
                    name: 'Helen Harper',
                    text: "I've finished it! See you so",
                    time: '10 min'
                },
                {
                    profile: require('@/assets/images/users/avatar-3.jpg'),
                    name: 'Mary Welch',
                    text: "This theme is awesome!",
                    time: '22 min'
                },
                {
                    profile: require('@/assets/images/users/avatar-4.jpg'),
                    name: 'Vicky Garcia',
                    text: "Nice to meet you",
                    time: '01 Hr'
                },
                {
                    name: 'Scott Pierce',
                    text: "Wow that's great",
                    time: '04 Hrs'
                },
                {
                    name: 'Ray Little',
                    text: "Hey! there I'm available",
                    time: '10 Hrs'
                },
                {
                    name: 'Robert Perez',
                    text: "Thanks",
                    time: 'yesterday'
                },
                {
                    profile: require('@/assets/images/users/avatar-3.jpg'),
                    name: 'Mary Welch',
                    text: "This theme is awesome!",
                    time: '22 min'
                },
            ]
        }
    },
}
</script>

<template>
    <div class="col-xl-4">
        <div class="card">
            <div class="card-header border-0">
                <div class="d-flex align-items-start">
                    <div class="flex-grow-1">
                        <h5 class="card-title">Inbox</h5>
                    </div>

                    <div class="flex-shrink-0">
                        <b-dropdown variant="white" toggle-class="font-size-16 text-muted p-0">
                            <template v-slot:button-content>
                                <i class="mdi mdi-dots-horizontal"></i>
                            </template>
                            <b-dropdown-item>Action</b-dropdown-item>
                            <b-dropdown-item>Another action</b-dropdown-item>
                            <b-dropdown-item>Something else here</b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
            </div>
            <!-- end card header -->

            <div class="pb-4">
                <div class="chat-message-list widget-chat-list" data-simplebar>
                    <div class="px-4">
                        <ul class="list-unstyled chat-list">
                            <li v-for="(item, index) of listInbox" :key="index">
                                <a href="#" class="mt-0">
                                    <div class="d-flex align-items-start">
                                        <div v-if="item.profile" class="flex-shrink-0 user-img online align-self-center me-3">
                                            <img :src="`${item.profile}`" class="rounded-circle avatar-sm" alt="">
                                            <span class="user-status"></span>
                                        </div>

                                        <div v-if="!item.profile" class="flex-shrink-0 user-img online align-self-center me-3">
                                            <div class="avatar-sm align-self-center">
                                                <span class="avatar-title rounded-circle bg-soft-primary text-primary">
                                                    {{item.name.charAt(0)}}
                                                </span>
                                            </div>
                                            <span class="user-status"></span>
                                        </div>
                                        
                                        <div class="flex-grow-1 overflow-hidden">
                                            <h5 class="text-truncate font-size-14 mb-1">{{item.name}}</h5>
                                            <p class="text-truncate mb-0">{{item.text}}</p>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="font-size-11">{{item.time}}</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <!-- end li -->
                        </ul>
                        <!-- end ul -->
                    </div>
                </div>
            </div>
        </div>
        <!-- end card -->
    </div>
    <!-- end col -->
</template>