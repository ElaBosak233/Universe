<script lang="ts">
export default {
    layout: "dash",
    // created: () => {
    //     const route = useRoute();
    //     const router = useRouter();
    //     if (route.hash == "#refresh") {
    //         router.replace("/home");
    //         window.location.reload();
    //     }
    // },
    setup() {
        const route = useRoute();
        const router = useRouter();
        useMeta({
            title: "首页 - eLink"
        });
    }
}
</script>