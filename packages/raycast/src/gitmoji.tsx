import { List, ActionPanel, Action } from "@raycast/api";
import { useState } from "react";
import gitmojiData from "../../gitmojis/src/gitmojis.json";

export default function Command() {
  const [searchText, setSearchText] = useState("");
  const allGitmojis = gitmojiData.gitmojis;

  const filteredGitmojis = allGitmojis.filter((item) => {
    const search = searchText.toLowerCase();
    const searchTerms = search.split(" ").filter(term => term.length > 0);
    return searchTerms.every(term => 
    item.code.toLowerCase().includes(term) ||
    item.name.toLowerCase().includes(term) ||
    item.description.toLowerCase().includes(term)
    );
  });

  return (
    <List
      isShowingDetail
      searchBarPlaceholder="Search by name, emoji, or description..."
      onSearchTextChange={setSearchText}
      filtering={false}
    >
      {filteredGitmojis.map((item) => (
        <List.Item
          key={item.name}
          icon={item.emoji}
          title={item.code}
          subtitle={item.description}
          detail={
            <List.Item.Detail
              markdown={`# ${item.emoji}\n## ${item.code}\n\n${item.description}`}
            />
          }
          actions={
            <ActionPanel>
              <Action.Paste title="Paste Code" content={item.code} />
              <Action.Paste 
                title="Paste Emoji" 
                content={item.emoji} 
                shortcut={{ modifiers: ["cmd"], key: "enter" }} 
              />
              <Action.CopyToClipboard title="Copy Code" content={item.code} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
