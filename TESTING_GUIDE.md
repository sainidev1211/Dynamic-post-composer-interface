# Post Composer - Testing & Usage Guide

## Quick Start

1. **Open Application**
   - Navigate to `http://localhost:3000`
   - You'll see the Post Composer interface with a gradient purple background

2. **Select Platforms**
   - On the left side, you'll see platform checkboxes with icons
   - Click on platforms to select them (Twitter, Instagram, Facebook, LinkedIn, TikTok)
   - Selected platforms are highlighted in purple

3. **Compose Your Post**
   - Type your content in the textarea on the right
   - Watch real-time character count at the bottom
   - Validation updates immediately as you type

## Testing Different Scenarios

### Scenario 1: Twitter Post (280 Character Limit)
**Test Steps:**
1. Select only "Twitter"
2. Type a short message: "Just launched our new product! Check it out now 🚀 #tech #startup"
3. Observe: Should show ✅ valid status in Twitter validation card
4. Try typing 300+ characters and see the ❌ error appear

**Expected Behavior:**
- Character counter shows current/limit (e.g., "145/280")
- Green progress bar indicates usage
- No errors when under 280 characters

---

### Scenario 2: Instagram Post (2,200 Chars, 30 Hashtag Limit, No URLs)
**Test Steps:**
1. Select "Instagram"
2. Type: "Beautiful sunset! Nature at its finest #nature #photography #travel #sunset #wanderlust"
3. Observe: Should be valid ✅
4. Add more hashtags to exceed 30
5. Try adding a URL (http://...)

**Expected Behavior:**
- Character limit shows as "1,234/2,200"
- Hashtag counter works
- Error appears when > 30 hashtags
- Error appears when URL detected

---

### Scenario 3: Multiple Platforms (Cross-Platform Conflict)
**Test Steps:**
1. Select: Twitter + Instagram
2. Type a post with 5 hashtags and under 280 characters
3. Extend content to 2,000 characters
4. Add a URL at the end

**Expected Behavior:**
- Twitter card: Shows ✅ for hashtags and URL, but ❌ for character limit
- Instagram card: Shows ✅ for character limit and hashtags, but ❌ for URL
- Publish button is disabled until all conflicts resolved

---

### Scenario 4: LinkedIn Professional Post (3,000 Chars, 5 Hashtag Limit)
**Test Steps:**
1. Select "LinkedIn"
2. Type a professional message with 1,000 characters and 3 hashtags
3. Observe: Should show ✅ valid

**Expected Behavior:**
- Shows "1,000/3,000" characters
- Hashtag limit enforced at 5
- URLs allowed

---

### Scenario 5: No Platform Selected (Edge Case)
**Test Steps:**
1. Unselect all platforms
2. Type content
3. Try clicking "Publish"

**Expected Behavior:**
- Alert: "❌ Please select at least one platform"
- No platforms shown in validation section

---

### Scenario 6: Empty Content (Edge Case)
**Test Steps:**
1. Select any platform
2. Leave textarea empty
3. Click "Publish"

**Expected Behavior:**
- All platforms show ❌ error: "Content cannot be empty"
- Publish button disabled
- Alert: "❌ Please write something before publishing"

---

### Scenario 7: Real-Time Feedback
**Test Steps:**
1. Select all 5 platforms
2. Type slowly and observe validation cards
3. Watch character counters update
4. See warnings appear at 80% capacity

**Expected Behavior:**
- Validation cards appear immediately
- Progress bars update smoothly
- Warnings appear before reaching limit
- Cards animate in with smooth transitions

---

## Platform Rules Reference

| Platform | Char Limit | Hashtags | URLs | Notes |
|----------|-----------|----------|------|-------|
| **Twitter** | 280 | Max 10 | ✅ Allowed | Most restrictive |
| **Instagram** | 2,200 | Max 30 | ❌ Not Allowed | URL restriction |
| **Facebook** | 63,206 | None | ✅ Allowed | Most permissive |
| **LinkedIn** | 3,000 | Max 5 | ✅ Allowed | Professional focus |
| **TikTok** | 2,200 | Max 50 | ✅ Allowed | Most flexible |

---

## UI/UX Features to Test

### Visual Feedback
- ✅ Check that selected platforms are highlighted
- ✅ Verify validation cards have color-coded borders (green/red)
- ✅ Confirm progress bars fill smoothly
- ✅ Test hover effects on cards and buttons
- ✅ Verify animations when switching platforms

### Responsiveness
- ✅ Test on desktop (full grid layout)
- ✅ Test on tablet (adjusted grid)
- ✅ Test on mobile (single column layout)
- ✅ Platform selector becomes 2 columns on mobile

### Interactions
- ✅ Click checkboxes to toggle platforms
- ✅ Type in textarea to update validation
- ✅ Click "Publish" to submit (when valid)
- ✅ Click "Clear" to reset textarea

---

## Common Issues & Troubleshooting

**Validation not updating:**
- Wait a moment for real-time updates
- Try typing a character and deleting it
- Refresh the page with F5

**Styling looks off:**
- Ensure you're on http://localhost:3000 (not 5173)
- Check that dev server is running: `npm run dev`
- Try hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

**Platform selection not working:**
- Verify checkboxes are clickable
- Check browser console (F12) for errors
- Ensure JavaScript is enabled

---

## Example Test Data

### Valid Post for All Platforms
```
"Excited to announce our new feature! 
Faster, better, stronger. 
#innovation #tech #startup"
```
Length: ~60 chars, 3 hashtags, no URL → Should be ✅ for all platforms

### Twitter-Only Valid
```
"Throwback to when we started in a garage. 
Now we're changing the world! #journey"
```
Length: ~70 chars, 1 hashtag → ✅ for Twitter, ✅ for most others

### Problematic for Multiple Platforms
```
"Check out our full product demo at http://example.com/demo 
Read our journey at http://blog.example.com 
#product #marketing #business #technology #startup #innovation #news"
```
→ ❌ Instagram (URLs + 7 hashtags), ✅ Twitter (if trimmed)

---

## Performance Notes
- Real-time validation runs on every keystroke
- No network requests (all validation is local)
- Smooth animations on all components
- Responsive grid adapts to screen size

---

## Success Criteria
✅ All platforms validate correctly
✅ Character counters match platform limits
✅ Real-time feedback appears instantly
✅ UI is responsive and intuitive
✅ Publish only works when validation passes
✅ Animations are smooth
✅ No console errors
