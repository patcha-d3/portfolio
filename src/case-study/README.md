# Case Study Structure

## โครงสร้างไฟล์ต่อโปรเจกต์

```
case-study/
└── uiux/
    ├── gotit.jsx           # Route component - ใส่ content + caseLogo
    ├── gotit.content.jsx  # เนื้อหาทั้งหมดของ case study
    ├── gotit_hero.png     # Hero banner image
    └── gotit_logo.png     # Logo แสดงใน title strip
```

## การเพิ่ม Case Study ใหม่

1. สร้างโฟลเดอร์ `case-study/uiux/[project-name]/`
2. สร้าง `[project].content.jsx` – export content object ตามโครงสร้างของ `gotit.content.jsx`
3. สร้าง `[project].jsx` – import CaseStudyTemplate + content แล้วส่ง props
4. เพิ่ม Route ใน `App.jsx` เช่น `<Route path="/case-studies/uiux/healu" element={<Healu />} />`

## โครงสร้าง content object (ดู gotit.content.jsx เป็นตัวอย่าง)

- `projectTitle` – ชื่อโปรเจกต์
- `tocItems` – รายการ TOC (string หรือ `{ id, label }` สำหรับ custom ID)
- `hero` – { image, alt }
- `category` – เช่น "UI/UX Project"
- `skills` – { groups: [{ category, chips: [] }] }

### Sections (ตามลำดับ 01–07)

- `context` – 01 Context: overview, targetUsers, whyThisMatters
- `problem` – 02 The Problem: { title, items: [{ image, title, description, body }] }
- `definingOpportunity` – 03 Defining the Opportunity: { intro, cards: [{ icon, title, body }] }
- `howWeSolvedIt` – 04 How We Solved It: { title, bento, items } (bento grid)
- `designingExperience` – 05 Designing the Experience: { subsections }
- `designSystem` – 06 Product Design System: { subsections }
- `leadership` – 07 Project Leadership & Execution: { subsections }
- `outcomes` – 08 Outcomes & Impact: { subsections }

- `figmaIcon` – icon สำหรับ metaLinks (optional)
