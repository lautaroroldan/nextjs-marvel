import ContentLoader from "react-content-loader"

const SkeletonTable = (props: any) => (
    <ContentLoader
        speed={2}
        width={800}
        height={160}
        viewBox="0 0 800 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="284" y="34" rx="3" ry="3" width="88" height="11" />
        <rect x="78" y="33" rx="3" ry="3" width="53" height="10" />
        <rect x="6" y="29" rx="0" ry="0" width="20" height="20" />
        <rect x="6" y="61" rx="0" ry="0" width="20" height="20" />
        <rect x="6" y="93" rx="0" ry="0" width="20" height="20" />
        <rect x="6" y="126" rx="0" ry="0" width="20" height="20" />
        <rect x="5" y="161" rx="0" ry="0" width="20" height="20" />
        <rect x="78" y="66" rx="3" ry="3" width="53" height="10" />
        <rect x="78" y="99" rx="3" ry="3" width="53" height="10" />
        <rect x="78" y="132" rx="3" ry="3" width="53" height="10" />
        <rect x="79" y="167" rx="3" ry="3" width="53" height="10" />
        <rect x="285" y="66" rx="3" ry="3" width="88" height="11" />
        <rect x="285" y="98" rx="3" ry="3" width="88" height="11" />
        <rect x="286" y="131" rx="3" ry="3" width="88" height="11" />
        <rect x="288" y="162" rx="3" ry="3" width="88" height="11" />
        <rect x="519" y="33" rx="3" ry="3" width="48" height="11" />
        <rect x="431" y="33" rx="3" ry="3" width="48" height="11" />
        <rect x="431" y="65" rx="3" ry="3" width="48" height="11" />
        <rect x="433" y="98" rx="3" ry="3" width="48" height="11" />
        <rect x="434" y="131" rx="3" ry="3" width="48" height="11" />
        <rect x="519" y="131" rx="3" ry="3" width="48" height="11" />
        <rect x="520" y="97" rx="3" ry="3" width="48" height="11" />
        <rect x="522" y="65" rx="3" ry="3" width="48" height="11" />
    </ContentLoader>
)

export default SkeletonTable