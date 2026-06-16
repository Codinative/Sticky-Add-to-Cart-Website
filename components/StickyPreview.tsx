import Icon from "@/components/Icon";

/** A realistic mock of a product page with the sticky Add to Cart bar pinned at the bottom. */
export default function StickyPreview() {
  return (
    <div className="cwrap">
      <div className="ccard">
        <div className="ccard-head">
          <div className="ccard-dots"><i /><i /><i /></div>
          <span className="ccard-url">store.com · product</span>
        </div>
        <div className="ccard-body spv-body">
          {/* faux product page behind the bar */}
          <div className="spv-prod">
            <div className="spv-gallery" />
            <div className="spv-info">
              <span className="spv-eyebrow">Audio · Headphones</span>
              <div className="spv-title">Premium Wireless Headphones</div>
              <div className="spv-price"><b>$249.00</b> <s>$329.00</s></div>
              <span className="spv-line w90" />
              <span className="spv-line w70" />
              <span className="spv-line w80" />
            </div>
          </div>

          {/* the sticky bar */}
          <div className="spv-bar">
            <span className="spv-thumb" />
            <div className="spv-bar-info">
              <b>Premium Wireless Headphones</b>
              <span>$249.00</span>
            </div>
            <span className="spv-variant">Black <Icon name="chevR" size={13} /></span>
            <span className="spv-qty"><i>−</i><b>1</b><i>+</i></span>
            <span className="spv-cta"><Icon name="cart" size={16} /> Add to Cart</span>
          </div>
        </div>
      </div>
      <div className="cfloat">
        <Icon name="pin" size={18} />
        <div>
          <b>Always in reach</b>
          <span>Stays visible as they scroll</span>
        </div>
      </div>
    </div>
  );
}
