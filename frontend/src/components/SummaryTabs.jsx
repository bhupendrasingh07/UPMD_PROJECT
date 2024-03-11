import React from "react";
import TestimonialsContent from "./TestimonialsContent";
import { useSelector } from "react-redux";

const SummaryTabs = () => {
  const { selectedOption } = useSelector(
    (state) => state.allCart.packageDetails
  );
  console.log(selectedOption);
  return (
    <>
      <aside className="mr-auto checkout-right">
        <div className="sticky">
          <div className="invoice-items" id="preview">
            <h2 className="mb-4">Summary</h2>

            <div className="cart-contents">
              {selectedOption &&
                selectedOption.map((item) => (
                  <div className="mb-4 d-flex justify-content-between">
                    <div>
                      <div className="text-500">{item}</div>

                      {/* <div>
                        <span className="mr-1 text-muted">Qty</span>1
                      </div> */}
                    </div>
                    {/* <div className="text-right text-500">$190.00</div> */}
                  </div>
                ))}

              <hr />
              <div className="mt-4 mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div
                    className="relative coupon-input w-100"
                    id="coupon-fields"
                  >
                    <input
                      type="text"
                      name="coupon"
                      className="form-control"
                      placeholder="Have a coupon?"
                      defaultValue=""
                    />
                    <div>
                      <button
                        type="button"
                        className="ml-2 mr-2 btn btn-link btn-sm text-600"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {/* Show total and payment terms */}
              <div className="mb-4 d-flex justify-content-between">
                <div>
                  <div className="text-500">Total</div>
                  <div className="text-muted">USD</div>
                </div>
                <div className="text-right">
                  <h2 className="margin-0">
                    <strike className="org-slashed-price-checkout">
                      $0.00
                    </strike>
                    $0.00
                  </h2>
                </div>
              </div>
            </div>

            {/* Secondary submit button for mobile */}
            <button
              type="submit"
              className="mt-5 btn btn-light btn-lg d-block w-100 d-md-none"
              data-continue="Continue to Payment"
              data-continue-paypal="Continue to PayPal"
              data-total={0}
            >
              Complete Purchase
            </button>
            <div className="mt-4 text-center d-block d-md-none"></div>
            <input type="hidden" id="order-total" defaultValue={0} />
            <input type="hidden" id="items" defaultValue="[]" />
            <input type="hidden" id="currency" defaultValue="USD" />
            <input type="hidden" id="balance-options" defaultValue="" />
            <input type="hidden" id="variant-prices" defaultValue="null" />
          </div>
          <TestimonialsContent></TestimonialsContent>
        </div>
      </aside>
    </>
  );
};

export default SummaryTabs;
