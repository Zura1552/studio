import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

export function Faq({ layout = 'horizontal' }: { layout?: 'horizontal' | 'vertical' }) {
  const faqItems = [
    {
      question: "Tại sao cần xác minh kênh mua hàng?",
      answer: "Việc xác minh giúp bạn an tâm khi mua đúng sản phẩm chính hãng, tránh rủi ro từ hàng giả, hàng kém chất lượng và bảo vệ thông tin cá nhân khỏi các website không đáng tin cậy.",
    },
    {
      question: "Làm sao để nhận biết kênh không chính hãng?",
      answer: (
        <>
          <p className="mb-2">Các dấu hiệu thường gặp của kênh không chính hãng bao gồm:</p>
          <ul className="list-disc space-y-1 pl-4">
            <li>Tên miền sai chính tả</li>
            <li>Mức giá bất thường</li>
            <li>Thiếu thông tin liên hệ rõ ràng</li>
            <li>Không có chính sách đổi trả</li>
            <li>Hình ảnh không đồng nhất với thương hiệu</li>
          </ul>
        </>
      ),
    },
    {
      question: "Tôi có thể báo cáo kênh giả mạo ở đâu?",
      answer: "Sử dụng nút “Báo cáo kênh nghi ngờ” hoặc liên hệ trực tiếp bộ phận chăm sóc khách hàng của MAISON để được hỗ trợ xác minh.",
    }
  ];

  return (
    <section className="w-full pt-8">
      <div className={cn(
        "grid grid-cols-1 gap-8 items-start",
        layout === 'horizontal' && 'md:grid-cols-2'
      )}>
        {/* Left Column: FAQs */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-left">
            Các câu hỏi thường gặp
          </h3>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Right Column: Call to Action */}
        <div className="flex flex-col items-center justify-center text-center p-8 rounded-lg">
            <ShoppingBag className="h-16 w-16 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-foreground">
              An Tâm Tuyệt Đối
            </h3>
            <p className="text-muted-foreground mb-6">
              Khi mọi thắc mắc đã được giải đáp, hãy tự tin khám phá bộ sưu tập chính hãng từ Maison.
            </p>
          <Button size="lg" className="w-full">Bắt Đầu Mua Sắm</Button>
        </div>
      </div>
    </section>
  );
}
