import type { Detachments } from "../../data/detachments.ts";
import { detachmentsRulesByDetachment } from "../../data/detachments.ts";

export interface DetachmentsProps {
  detachment: Detachments;
}

const Detachments = ({ detachment }: DetachmentsProps) => {
  const detachmentRule = detachmentsRulesByDetachment[detachment];
  return (
    <>
      <h3 className="text-10 font-bold">{detachment}</h3>
      <h4 className="text-8 font-bold">{detachmentRule.name}</h4>
      {Object.entries(detachmentRule.benefit).map(([name, benefit], index) => (
        <div className="grid grid-cols-2 md:grid-cols-detachments gap-5 border-t py-1"
             key={index}>
          <div>{name}</div>
          <div>{benefit}</div>
        </div>
      ))}
    </>
  )
}
export default Detachments;
